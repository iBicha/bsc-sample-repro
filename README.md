## Description
Bug introduced in bsc 0.69.0 - works fine in 0.68.5

## How to reproduce

```
nvm use --lts
npm i
npm run build # Should build fine

npm i brighterscript@0.69.0 --save-dev
npm run build # Build should fail
```

```
[10:03:14:418 PM] Validating project finished. (13.286ms)

source/main.bs:4:11 - error BS1001: Cannot find name 'Tasks'

 4      print Tasks.MyTask
              ~~~~~       

     source/main.bs:4:11
     Not defined in scope 'source'

[10:03:14:422 PM] Found 1 error
```
