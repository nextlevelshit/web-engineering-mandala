# Web Engineering - DHBW Stuttgart

## Sitzung 1: Formalia & Internet 101 (09.05.)

### Dozent
**Michael Werner Czechowski**
- Jahrgang 1988
- B.Sc. Wirtschaftsinformatik (Leibniz-FH Hannover)
- Angestellt bei PONS Langenscheidt GmbH Stuttgart
- Honorardozent und Berater

### Vorlesungsplan
1. **09.05.** - Formalia, Kennenlernen, Internet 101
2. **16.05.** - HTML und CSS (Frameworks)
3. **23.05.** - JS (Frameworks) und npm
4. **30.05.** - nodeJS: Scripting, Running and Building
5. **06.06.** - Express API, CRUD und Middlewares
6. **13.06.** - Testing (unit, integration, end-to-end)
7. **20.06.** - TypeScript
8. **27.06.** - Docker, Proxies and DBs
9. **04.07.** - Präsentationen

### Prüfungsleistung
**Benotete Prüfungsleistung:**
- Gruppenarbeit (2-3 Personen)
- Entwicklung einer Web Applikation + Präsentation

**Unbenotete Prüfungsvorleistung:**
- Impulsvortrag zu Beginn jeder Sitzung (~10min)
- Wiederholung des Stoffs der vorherigen Sitzung

### Internet Geschichte
- 1966: ARPANET
- 1969: RFCs → 1986 IETF → 1992 Internet Society
- 1974: TCP/IP und HTTP(S)
- 1987: Domain Names und DNS
- 1993: "Erster" Browser - Mosaic
- 1994: W3C (HTML, XML, CSS, SVG, WCAG)
- 1995: ECMAScript (JS)
- 2006/08: V8 JS Runtime Engine

### Entwicklungsumgebung
**Benötigt:**
- git
- nodeJS und npm
- cURL oder wget
- IDE (VS Code, JetBrains WebStorm)
- Optional: Docker

**Git Basics:**
```bash
git init
git add [Dateiname]
git commit -m "Commit-Nachricht"
git push [remote] [branch]
git pull [remote] [branch]
git clone [repository-URL]
```

---

## Sitzung 2: HTML & CSS (16.05.)

### HTML Anatomie
```html
<p class="editor-note">My cat is very grumpy</p>
```
- Opening Tag + Content + Closing Tag = Element
- Attributes in Opening Tag

### HTML Meta Data / Open Graph
```html
<meta name="description" content="Beschreibung der Seite" />
<meta property="og:title" content="Seitentitel" />
<meta property="og:description" content="Beschreibung" />
<meta property="og:image" content="bild.png" />
```

### HTML Input Autocomplete
```html
<label for="cc-number">Kreditkartennummer</label>
<input name="cc-number" id="cc-number" autocomplete="cc-number" />

<label for="lastName">Nachname:</label>
<input name="lastName" id="lastName" autocomplete="family-name" />
```

### HTML Microdata
```html
<div itemscope itemtype="https://schema.org/Event">
  <div itemprop="name">Spinal Tap</div>
  <span itemprop="description">Reunion Show</span>
  <time itemprop="startDate" datetime="2011-05-08T19:30">8. Mai</time>
</div>
```

### CSS Anatomie
```css
/* ID selector */
#description {
  color: orangered; /* Property: Value */
}
```

### CSS Specificity
Reihenfolge der Spezifität (höchste zuerst):
1. Inline Styles
2. IDs
3. Classes, Attributes, Pseudo-classes
4. Elements

### CSS Frameworks
- **TailwindCSS**: Utility-First CSS Framework
- **Flowbite**: Tailwind CSS Component Library

---

## Sitzung 5: JavaScript & nodeJS (06.06.)

### ECMAScript
- Standardisiert seit 1997 als ECMA-262
- Neueste Edition: ECMAScript 2023 (ES14)
- ES6/ES2015 als wichtiger Meilenstein

### Client vs Server-Side JavaScript

**Client-Side:**
- DOM Manipulation
- Browser APIs (window, document, navigator)

**Server-Side (nodeJS):**
- Non-blocking I/O
- File System Access
- Database Processing
- Web Server Funktionalität

### Frontend Frameworks

**React:**
```jsx
function MyButton() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

**Vue.js:**
```vue
<template>
  <button @click="handleClick">
    Clicked {{ count }} times
  </button>
</template>

<script>
export default {
  data() {
    return { count: 0 };
  },
  methods: {
    handleClick() {
      this.count++;
    }
  }
};
</script>
```

**Svelte:**
```svelte
<script>
  let count = 0;
  
  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
```

### Rendering Frameworks
- **Next.js**: React-basiert, SSR/SSG
- **Nuxt**: Vue-basiert, SSR/SSG
- **Gatsby**: Static Site Generator mit GraphQL

### Build Tools
- **Webpack**: Module Bundler mit großem Ecosystem
- **Vite**: Schnelle Entwicklungsumgebung mit Rollup
- **Parcel**: Zero-Configuration Bundler

### npm Scripts
```json
{
  "scripts": {
    "start": "npm run dev",
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

---

## Sitzung 6: nodeJS Server (13.06.)

### nodeJS Basics
```javascript
// Process handling
process.on("SIGINT", () => {
  console.log("Received SIGINT. Closing server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
```

### Express.js Server
```javascript
import express from "express";

const app = express();
app.use(express.json());

// Basic route
app.get("/api", async (req, res) => {
  res.json({ timestamp: Date.now() });
});

// Start server
const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### CRUD Operations
```javascript
// GET
app.get("/api/users/:id", (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  res.json(user);
});

// POST
app.post("/api/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT
app.put("/api/users/:id", (req, res) => {
  const index = users.findIndex(u => u.id === req.params.id);
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
});

// DELETE
app.delete("/api/users/:id", (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.status(204).send();
});
```

### WebSockets
```javascript
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");
  
  ws.on("message", (data) => {
    console.log("Received:", data.toString());
    ws.send(`Echo: ${data}`);
  });
});
```

---

## Prüfungskriterien

### Bewertung (60 Punkte gesamt)
- **Idee, Konzeption, Planung**: 20 Punkte
- **Plattformunabhängigkeit**: 5 Punkte  
- **Clean Code**: 25 Punkte
- **Zusatzpunkte**: 10 Punkte

### Zusatzpunkte Möglichkeiten
- Dev/Prod Environment Trennung
- Konfiguration via .env
- HTTPS Implementation
- Docker Container
- UML Diagramme
- Saubere Dokumentation
- Nachhaltiges Testing
- WCAG Compliance

### Accessibility Mindestanforderungen
- Input fields haben Labels
- Keyboard Navigation möglich
- "Skip to main content" Shortcut
- Screen Reader kompatibel
```
