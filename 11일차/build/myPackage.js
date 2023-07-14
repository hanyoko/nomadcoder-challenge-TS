// @ts-check
//이것은 뭐냐면, 타입스크립트 파일에게 자바스크립트 파일을 확인하라고 알리는 것
// /** */ 엔터를 누르면 자동완성
//프로젝트를 초기화한다 는 의미
/**
 *
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
//누군가가 GitHub와 npm에 푸시 해 둔 것이고, 이걸 설치했다고 가정
export function init(config) {
    return true;
}
/**
 * Exits the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
    return code + 1;
}
