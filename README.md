# FindMyClass

A web project for the course Website Design & Implementation.

## Tech Stack
- HTML5
- CSS (custom styles in `assets/css/styles.css` + Bootstrap)
- JavaScript (`assets/js/app.js`), Leaflet for maps

## Run Locally
```powershell
cd "c:\Users\Smith\OneDrive\Desktop\Projects\Web Dev Projects\FindMyClass"
python -m http.server 8000
```
Open http://localhost:8000/FindMyClass.html

## Structure
- `Homepage.html` – Campus map + search
- `Recent.html` – Recent searches
- `FindMyClass.html` – Login
- `Sign Up Page.html` – Signup
- `ServiceDirectory.html`, `AboutUs.html`, `Contact.html`, `information.html`, `profile.html`, `editprofile.html`
- `assets/css/styles.css` – shared styling
- `assets/js/app.js` – shared behaviors (search history)

## Deploy (GitHub)
```powershell
cd "c:\Users\Smith\OneDrive\Desktop\Projects\Web Dev Projects\FindMyClass"
git init
git branch -M main
git remote add origin https://github.com/jennisha876/FindMyClass.git
git add .
git commit -m "Initial project setup and structural fixes"
git push -u origin main
```
If authentication is required, sign in with GitHub in VS Code or use a Personal Access Token.
