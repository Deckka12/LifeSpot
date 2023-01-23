function checkAge() {
    session.set("age", prompt("����������, ������� ��� �������?"))

    if (session.get("age") >= 18) {
        alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + new Date().toLocaleString());
    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
        window.location.href = "http://www.google.com"
    }
}
function handleSession() {
    // �������� ����� ������ ������
    session.set("startDate", new Date().toLocaleString())
    // �������� UserAgent
    session.set("userAgent", window.navigator.userAgent)
}


let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}
// ��������� ������ (��������� ����� expression)
let session = new Map();

function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* ������ ���������� ������ ���������� � ������� ��������� */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        // ������� �������� �� ������ ���������, ����� �� ���������� �����������
        // ������ ���
        if (newVisit) {
            alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + new Date().toLocaleString());
        }
    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
        window.location.href = "http://www.google.com"
    }
}
let logger = function () {
    console.log('������ ������: ' + window.sessionStorage.getItem("startDate"))
    console.log('������ �������: ' + window.sessionStorage.getItem("userAgent"))
    console.log('������� ������������: ' + window.sessionStorage.getItem("userAge"))
}
function handleSession(logger, checker) {

    // ��������� ���� ������ � �����������, ���� ����� �����
    if (window.sessionStorage.getItem("startDate") == null) {
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }

    // ��������� userAgent � �����������, ���� ����� �����
    if (window.sessionStorage.getItem("userAgent") == null) {
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }

    // ��������� ������� � �����������, ���� ����� �����
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("����������, ������� ��� �������?");
        window.sessionStorage.setItem("userAge", input)

        /* ������� ������������ � sessionStorage. ������, ��� ������ ����� ������������, �
         ��� ����������� �������� �� ������� �� ������ �����������*/
        checker(true)
    } else {

        /* ������������ ������� �� ������ ���, ����������� �� ����������. */
        checker(false)
    }

    /* �������� ���������� � �������� ����-���� ������� �����������.
        ���������� � �������� �������� �� �����������, ����� ������� � ��������, �� �� �������� ��� ����������.
    */
    logger()
}