// tslint:disable-next-line:max-line-length
// REFS: https://github.com/todotxt/todo.txt-android/blob/614e0b5eb688cae8236f33c64d7e791d1030cf3c/app/src/main/java/com/todotxt/todotxttouch/task/TextSplitter.java

import { TreeModel } from '../../third-party/ngx-tree-dnd/models/tree-view.model';

const shortid = require('shortid');

import { MarkdownTaskModel } from '../model/markdown.model';

const COMPLETED_PATTERN = /(\[[x|X]] )(.*)/;
const COMPLETED_PREPENDED_DATES_PATTERN = /(\d{4}-\d{2}-\d{2}) (\d{4}-\d{2}-\d{2}) (.*)/;
const SINGLE_DATE_PATTERN = /(\d{4}-\d{2}-\d{2}) (.*)/;
const CONTEXT_PATTERN = /(?:^|\s)@(\S*\w)/;
const TAG_PATTERN = /(?:^|\s)\+(\S*\w)/g;
const PRIORITY_PATTERN = /\(([A-Z])\) (.*)/;

const MarkdownHelper = {
  todoCompiled(text: any): MarkdownTaskModel {
    const originText = text;
    let completed = false;
    let startDate;
    let endDate;
    let context;
    let priority;
    let tag;

    TAG_PATTERN.lastIndex = 0;

    const completeMatch = COMPLETED_PATTERN.exec(text);
    if (completeMatch && completeMatch.length && completeMatch.length > 1) {
      completed = true;
      text = completeMatch[2];
    }

    const priorityMatch = PRIORITY_PATTERN.exec(text);
    if (priorityMatch && priorityMatch.length && priorityMatch.length > 1) {
      priority = priorityMatch[1];
      text = priorityMatch[2];
    }

    const dateMatch = COMPLETED_PREPENDED_DATES_PATTERN.exec(text);
    if (dateMatch && dateMatch.length && dateMatch.length > 2) {
      startDate = dateMatch[1];
      endDate = dateMatch[2];
      text = dateMatch[3];
    } else {
      const singleDateMatch = SINGLE_DATE_PATTERN.exec(text);
      if (singleDateMatch && singleDateMatch.length && singleDateMatch.length >= 2) {
        endDate = singleDateMatch[1];
        text = singleDateMatch[2];
      }
    }

    const contextMatch = CONTEXT_PATTERN.exec(text);
    if (contextMatch && contextMatch.length && contextMatch.length > 1) {
      context = contextMatch[1];
      text = text.replace(CONTEXT_PATTERN, '');
    }

    const tagMatch = TAG_PATTERN.exec(text);
    if (tagMatch && tagMatch.length && tagMatch.length > 1) {
      tag = text.match(TAG_PATTERN).map(t => {
        return t.replace(/(?:^|\s)\+/, '');
      });
      text = text.replace(TAG_PATTERN, '');
    }

    const id = shortid.generate();
    return {
      originText,
      id,
      completed,
      startDate,
      endDate,
      tag,
      context,
      priority,
      text
    };
  },
  markdownToJSON(tokens: marked.Token[], originTasks) {
    let tasks;
    let result = '{';
    let checkString = '';

    for (const token of tokens) {
      if (token.type !== 'text') {
        checkString = '';
      }
      switch (token.type) {
        case 'list_start': {
          result += '"childrens": [';
          break;
        }
        case 'list_item_start': {
          result += '{ "item": ';
          if ((token as any).checked) {
            checkString = '[x] ';
          } else {
            checkString = '';
          }
          break;
        }
        case 'text': {
          if (token.text.includes('[x] ') || token.text.includes('[X] ') || token.text.includes('[ ] ')) {
            checkString = '';
          }
          result += JSON.stringify(MarkdownHelper.todoCompiled(checkString + token.text)) + ',';
          break;
        }
        case 'list_item_end': {
          result += '},';
          break;
        }
        case 'list_end': {
          result += ']';
          break;
        }
        default: {
          console.log(token);
        }
      }
    }

    result = result.replace(/,]/g, ']').replace(/},}/g, '}}');
    result += '}';

    try {
      tasks = JSON.parse(result).childrens;
    } catch (e) {
      tasks = originTasks;
    }

    return tasks;
  },
  toMindMapData(markdownJson: any) {
    if (!markdownJson) {
      return [];
    }
    const results = {
      name: 'Root',
      children: []
    };
    for (const taskItem of markdownJson) {
      const item = {
        name: (taskItem as any).item.text,
        originText: (taskItem as any).item.originText,
        children: []
      };
      if (taskItem.childrens) {
        item.children = MarkdownHelper.convertMindMapChildren(taskItem.childrens, item.children);
      }

      results.children.push(item);
    }
    return results;
  },
  convertMindMapChildren(childrens: any[] | TreeModel[], results) {
    for (const taskItem of childrens) {
      const item = {
        name: (taskItem as any).item.text,
        originText: (taskItem as any).item.originText,
        children: []
      };
      if (taskItem.childrens) {
        item.children = MarkdownHelper.convertMindMapChildren(taskItem.childrens, item.children);
      }

      results.push(item);
    }

    return results;
  }
};

export default MarkdownHelper;
