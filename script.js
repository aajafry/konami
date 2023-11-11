const pressed = [];
const secretCode = 'codeman';
window.addEventListener('keyup', (e) => {
    console.log(e.key)
    pressed.push(e.key);
    pressed.slice(-secretCode.length - 1, pressed.length - secretCode.length);
    if (pressed.join('').includes(secretCode)) {
        console.log('ding dong!');
        cornify_add();
    }
    console.log(pressed)

})