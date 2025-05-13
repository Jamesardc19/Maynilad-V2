# Change to the frontend directory
Set-Location -Path "d:\School Files\Personal Files\Maynilad Prototype\frontend"

# Create answers.txt with all the responses
@"
n
y
y
n
n
"@ | Out-File -FilePath answers.txt -Encoding utf8

# Run create-next-app with input from answers.txt
Get-Content answers.txt | npx create-next-app@latest . --typescript --tailwind --eslint

# Clean up
Remove-Item answers.txt
