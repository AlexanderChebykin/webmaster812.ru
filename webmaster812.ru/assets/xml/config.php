<?php if(basename(__file__) == 'config.php') exit; ?>
<?xml version="1.0" encoding="utf-8"?>
<xml>
    <Addresses>
        <!-- Enter your e-mail address -->
        <address>super.chebyckin@yandex.ru</address>
        <address on="subject" value="Support"></address>
        <address on="subject" value="Sales"></address>
        <address on="subject" value="Other"></address>
    </Addresses>
    <Config>
        <smtp>
        <!-- smtp gmail config -->
            <use>yes</use>
            <auth>yes</auth>
            <secure>tls</secure>
            <host>smtp.yandex.ru</host>
            <username>super.chebyckin@yandex.ru</username>
            <password>yandexviolence1989ru</password>
            <port>587</port>
        </smtp>
        <charset>utf-8</charset>
    </Config>
</xml>
