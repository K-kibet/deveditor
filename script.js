window.onload = () => {
    let pads = document.getElementsByClassName('text');
    let changebutt = document.getElementsByClassName('change');
    let frame = document.getElementById('frame');

    frame = frame.contentDocument || frame.contentWindow.document;

    let body = frame.body;

    let htmlstart = [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '   <meta charset="UTF-8">',
        '   <meta http-equiv="X-UA-Compatible" content="IE=edge">',
        '   <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '   <title>Document</title>',
        '</head>',
        '<body>',
        '   <h1>Hi there</h1>',
        '   <h2>Start Typing and enjoy auto preview</h2>',
        '</body>',
        '</html>'
    ]

    for(let elem in htmlstart) {
        pads[0].value = pads[0].value + htmlstart[elem] + "\n"
        body.innerHTML = body.innerHTML + htmlstart[elem];
    }

    function changepads (number) {
        for(let i = 0; i < 3; i++) {
            if(i == number) {
                if(pads[i].classList.contains('hide')){
                    pads[i].classList.remove('hide');
                }

                if(!pads[i].classList.contains('show')){
                    pads[i].classList.add('show');
                }

                if(!changebutt[i].classList.contains('active')){
                    changebutt[i].classList.add('active');
                }

                pads[i].focus();

                continue;
            }

            if(!pads[i].classList.contains('hide')){
                pads[i].classList.add('hide');
            }

            if(pads[i].classList.contains('show')){
                pads[i].classList.remove('show');
            }

            if(changebutt[i].classList.contains('active')){
                changebutt[i].classList.remove('active');
            }
        }
    }

    function changeContent (number) {
        frame.open();
        frame.close();
        frame.write(`<style>${pads[1].value} </style> ${pads[0].value} <body><script> \n ${pads[2].value} \n</script></body>`)

    }

    for(let i = 0; i < changebutt.length; i++) {
        changebutt[i].addEventListener('click', () => {
            changepads(i);
        })

        pads[i].addEventListener('input', function () {
            changeContent(i);
        })
    }
}
