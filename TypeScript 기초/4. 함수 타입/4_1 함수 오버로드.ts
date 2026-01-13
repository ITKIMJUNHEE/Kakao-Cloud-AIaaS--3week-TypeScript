function createElement(tag: "div"): HTMLDivElement;
function createElement(tag: "span"): HTMLSpanElement;
function createElement(tag: "input"): HTMLInputElement;
function createElement(tag: string): HTMLElement;

function createElement(tag: string): HTMLElement {
  if (typeof document !== "undefined") {
    return document.createElement(tag);
  }
  return { tagName: tag.toUpperCase() } as HTMLElement;
}

interface RequestOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: string;
}

function customFetch(url: string): Promise<Response>;
function customFetch(url: string, options: RequestOptions): Promise<Response>;
function customFetch(request: Request): Promise<Response>;

function customFetch(urlOrRequest: string | Request, options?: RequestOptions): Promise<Response> {
  
  return Promise.resolve(new Response());
}


function process<T>(item: T): T;
function process<T>(items: T[]): T[];

// 실제 구현체
function process<T>(input: T | T[]): T | T[] {
  return input;
}

// 테스트 실행용
console.log("--- 4-1 함수 오버로드 결과 ---");


const myDiv = createElement("div");
console.log("createElement('div') 결과:", myDiv.tagName || "HTMLDivElement 생성됨");


const single = process(100);       
const array = process([1, 2, 3]);  
console.log("process(single):", single);
console.log("process(array):", array);

export {};