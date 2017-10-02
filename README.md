# Word Counter
A javascript application that counts each individual word in a text file.

## Approach
I began by domain mapping how the application would run, as well as how the user would interact with it. This helped me decide which classes would be responsible for what to ensure they had a single responsibility.

I decided to create a simple browser application rather than using any frameworks or dependencies. Because of this, the application can be run natively in any browser that supports javascript ES6. The downside of this approach was that I was unable to run any feature tests on the application, however I think it was a justified decision as it keeps the application as simple as possible.

I used TDD to guide the process and ensure classes were encapsulated to help debugging and testing.

## Structure
```
├── README.md
├── Railway-Children-by-E-Nesbit.txt
├── assets
│   └── index.css
├── index.html
├── lib
│   └── jasmine-2.8.0
│       ├── boot.js
│       ├── console.js
│       ├── jasmine-html.js
│       ├── jasmine.css
│       ├── jasmine.js
│       └── jasmine_favicon.png
├── spec
│   ├── SpecRunner.html
│   ├── fileOpenerSpec.js
│   ├── primeCalculatorSpec.js
│   ├── splitterSpec.js
│   ├── wordCounterSpec.js
│   └── wordPrinterSpec.js
└── src
    ├── fileOpener.js
    ├── index.js
    ├── primeCalculator.js
    ├── splitter.js
    ├── wordCounter.js
    └── wordPrinter.js
```

## Technologies used
- javascript
- jasmine

## Setup Instructions
```sh
git clone git@github.com:tobold/wordcounter.git
cd wordcounter
open index.html

open ./spec/SpecRunner.html #for tests
```

## Instructions for use
- after opening index.html, click 'choose file' and select a text file (railway children has been provided).
- click 'count!'

## Image
![image](https://i.imgur.com/t9edAtp.png?1)
