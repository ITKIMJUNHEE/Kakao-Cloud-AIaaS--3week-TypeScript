function createElement(tag: "div"): HTMLDivElement;
function createElement(tag: "span"): HTMLSpanElement;
function createElement(tag: "input"): HTMLInputElement;
function createElement(tag: string): HTMLElement;
function createElement(tag: string): HTMLElement {
  return { tagName: tag.toUpperCase() } as any; 
}

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

function customFetch(url: string): Promise<Response>;
function customFetch(url: string, options: RequestOptions): Promise<Response>;
function customFetch(request: Request): Promise<Response>;
function customFetch(urlOrRequest: any, options?: any): Promise<Response> {
  return Promise.resolve(new Response());
}

function processValue<T>(item: T): T;
function processValue<T>(items: T[]): T[];
function processValue<T>(input: T | T[]): T | T[] {
  return input;
}

const myDiv = createElement("div");
const res = processValue(100);
const resArr = processValue([1, 2]);

console.log(myDiv, res, resArr);

export {};