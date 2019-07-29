export interface MarkdownTaskModel {
  completed: boolean;
  startDate?: string;
  endDate?: string;
  text: string;
  context?: string;
  priority?: string;
  mail?: string;
  tag?: string;
}

// tslint:disable-next-line:max-line-length
// REFS: https://github.com/todotxt/todo.txt-android/blob/614e0b5eb688cae8236f33c64d7e791d1030cf3c/app/src/main/java/com/todotxt/todotxttouch/task/TextSplitter.java
const COMPLETED_PATTERN = /([X,x] )(.*)/g;
const COMPLETED_PREPENDED_DATES_PATTERN = /(\d{4}-\d{2}-\d{2}) (\d{4}-\d{2}-\d{2}) (.*)/g;
const SINGLE_DATE_PATTERN = /(\d{4}-\d{2}-\d{2}) (.*)/g;
const CONTEXT_PATTERN = /(?:^|\s)@(\S*\w)/g;
const TAG_PATTERN = /(?:^|\s)\+(\S*\w)/g;
const PRIORITY_PATTERN = /\(([A-Z])\) (.*)/g;

const MarkdownHelper = {
  todoCompiled(text: any): MarkdownTaskModel {
    let completed = false;
    let startDate;
    let endDate;
    let context;
    let priority;
    let tag;

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
      tag = text.match(TAG_PATTERN);
      text = text.replace(TAG_PATTERN, '');
    }

    return {
      completed,
      startDate,
      endDate,
      tag,
      context,
      priority,
      text
    };
  }
};

export default MarkdownHelper;
