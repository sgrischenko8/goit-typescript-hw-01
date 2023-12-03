import { concatenation } from './concatenation';

const button = document.querySelector('button')!;
const input = document.querySelector('input')!;

if (button && input) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    concatenation(input.value, 'hello!');
    input.value = '';
  });
}
