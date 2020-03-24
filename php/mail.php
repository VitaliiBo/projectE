<?php

// Получаем значения переменных из пришедших данных

$name = $_POST['name'];

$phone = $_POST['phone'];

$service = $_POST['service'];

$email = 'skastrat@mail.ru';

$header = "Запрос услуги $phone";

//$message = $_POST['message'];

 
// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме 

$mes = "Имя: $name \nТелефон: $phone \nУслуга: $service";// \nТекст: $message";

 
// Пытаемся отправить письмо по заданному адресу

// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $email на свой адрес электронной почты

$send = mail ($email,$header,$mes,"Content-type:text/plain; charset = UTF-8\r\n");//From:$email");

 
// Если отправка прошла успешно — так и пишем 

if ($send == 'true')

//{echo "Сообщение отправлено";}
{echo 'true';}
// Если письмо не ушло — выводим сообщение об ошибке

else {echo 'false';}

?>