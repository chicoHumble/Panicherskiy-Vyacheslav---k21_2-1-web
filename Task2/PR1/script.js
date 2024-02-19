
var win;

function start() {
    var x, y;
    x = (window.outerWidth - 350) / 2 + window.screenX;
    y = (window.outerHeight - 270) / 2 + window.screenY;
    
    win = window.open('', 'w1', 'height=270, width=350, left=' + x + ',top=' + y);
    
    win.document.write('<h2>Новое окно</h2>');
    win.document.write('<p>JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.</p>');
    win.document.write('<p align="center"><a href="http://alit.16mb.com" target="_blank">ИТ ДонГТУ</a></p>');
    win.document.write('<p align="center"><input type="button" value="Закрыть" name="B1" onclick="opener.exit(opener.win);"></p>');
}

function exit(window) {
    window.close();
}
