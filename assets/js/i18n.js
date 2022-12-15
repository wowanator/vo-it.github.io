var langstrings = {
    "de" :{
        "lang": "Sprache",
        "softdev": "Softwareentwickler",
        "johndoe": "Jonas Döner",
        "aboutme": "Über Mich",
        "aboutmetext": "Willkommen! Mein Name ist Vladimir Ovchinnikov und ich bin Back-End-Softwareentwickler. Ich unterstütze Sie gerne bei Softwarelösungen, Automatisierung und Entwicklung für Ihr Projekt.",
        "description": "Mein Profil",
        "descriptiontext": "Aufbauend auf meinem Studium der Informatik, welches ich mit einem Bachelor abschloss, habe ich bereits 8 Jahre Erfahrung mit der Arbeit im Softwareentwicklungsumfeld. 
Hierbei lag mein Fokus auf der Entwicklung im Backend-Bereich, bei der ich ausreichend Erfahrung mit C#.NET und VB.NET, Oracle-Datenbanken sowie den Umgang mit Versionskontrollsystemen wie Gut und SVN sammeln konnte. ",
        "skills": "Meine Top-Skills",
        "contact": "Kontaktieren Sie mich",
        "msg": "Nachricht",
    },
    "en": {
        "lang": "Language",
        "softdev": "Software developer",
        "johndoe": "John Doe",
        "aboutme": "About Me",
        "aboutmetext": "Welcome! My name is Vladimir Ovchinnikov and I am a back-end software developer. I will gladly support you with software solutions, automatization and development for your project.",
        "description": "My Profile",
        "descriptiontext": "",
        "skills": "My Top Skills",
        "contact": "Get In Touch With Me",
        "msg": "Message",
    }
};
$(function(){
    $("span").translate({
    default_lang:"en",
    langs:"#lang-switch",
    source: langstrings
    });
});
