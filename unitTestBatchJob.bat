@echo off

REM Set the URL
set URL=http://localhost:5555/suggest

REM Set the key-value pairs
set name=testuser1
set suggestion=testsuggestion1

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser2
set suggestion=testsuggestion2

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser3
set suggestion=testsuggestion3

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser4
set suggestion=testsuggestion4

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser5
set suggestion=testsuggestion5

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Click to continue to the next step
echo Records Added press any key to continue...
pause > nul

@echo off

REM Set the URL
set URL=http://localhost:5555/suggest

REM Set the key-value pairs
set name=testuser1
set suggestion=updatedsuggestion1

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser2
set suggestion=updatedsuggestion2

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser3
set suggestion=updatedsuggestion3

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser4
set suggestion=updatedsuggestion4

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Set the key-value pairs
set name=testuser5
set suggestion=updatedsuggestion5

REM Create a temporary JSON file with the request data
echo { "name": "%name%", "suggestion": "%suggestion%" } > post_data.json

REM Send the POST request using curl
curl -X POST -H "Content-Type: application/json" -d @post_data.json %URL%

REM Remove the temporary JSON file
del post_data.json

REM Click to continue to the next step
echo Records updated press any key to continue...
pause > nul

@echo off

REM Set the URL for the DELETE request
set URL=http://localhost:5555/suggest

REM Send the DELETE request using curl
curl -X DELETE %URL%

pause


REM Click to continue to the next step
echo Records deleted press any key to continue...
pause > nul
