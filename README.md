# Universal mobile menu
Universal mobile menu is open source translation library for most popular words in mobile games menu
# How add translate

1. Copy json object and add it to end of languages array
```javascript
{
         "unityId":"English",
         "nativeName":"English",
         "play":"Play",
         "settings":"Setings",
         "music":"Music",
         "sounds":"Sounds"
      }
```
2. Set unityId value from SystemLanguage enum fron Unity Engine (optionaly)
3. Write native name of lanuage
4. Translate all worlds (translate only values in every "key":"value" pair)
