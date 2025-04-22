 //  dev
	//const devUrl ='https://docs.google.com/forms/u/0/d/e/1FAIpQLSewwOgTXm_OJmyLwxXPY2C6YI6nax6xTdyAuplFr2AyfPXYRQ/formResponse'
		
// prd
const prdUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScBmSlyG6AsRYu326aAYDhHAn_KsmE9IRns2AsBlDHilRYfIg/formResponse';

document.getElementById("submitButton").addEventListener("click", function() {
    const name = document.getElementById("f01").value;
    const email = document.getElementById("f02").value;
    const message = document.getElementById("f03").value;
    if (name === "") {
        Swal.fire({
            icon: 'error',
            title: '請輸入姓名',
        });
        return;
    }

    if (email === "") {
        Swal.fire({
            icon: 'error',
            title: '請輸入電子郵件',
        });
        return;
    }
    
    var formObj = {
        'entry.774967676': name,
        'entry.532808100': email,
        'entry.1228655812': message,
    };

    postForm(formObj);
});

function refreshPage() {
    // 使用 location.reload() 方法刷新页面
    location.reload();
}

function postForm(data) {
    $.ajax({
        type: 'POST',
        url: prdUrl,
        data: $.param(data), // 使用 $.param 將對象轉換為 URL 編碼格式
        contentType: 'application/x-www-form-urlencoded', // 設置 contentType
        complete: function() {
            Swal.fire({
                showCloseButton: true,
                icon: 'success',
                title: '資料已送出',
            });
            setTimeout(function() {
                refreshPage();
            }, 4100);
        }
    });

    let userAgent = window.navigator.userAgent;
    if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
        setTimeout(function() {
            Swal.fire({
                showCloseButton: true,
                icon: 'success',
                title: '資料已送出',
            });
        }, 200);
        setTimeout(function() {
            refreshPage();
        }, 3800); // iPad or iPhone
    }
}

