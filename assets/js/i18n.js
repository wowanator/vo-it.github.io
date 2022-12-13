var langstrings = {
    "de" :{
        "lang": "Sprache",
        "softdev": "Softwareentwickler",
        "johndoe": "Jonas Döner",
        "aboutme": "Über Mich",
        "aboutmetext": "Willkommen! Mein Name ist Vladimir Ovchinnikov und ich bin Back-End-Softwareentwickler. Ich unterstütze Sie gerne bei Softwarelösungen, Automatisierung und Entwicklung für Ihr Projekt.",
        
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
