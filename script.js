.calculator {
    width: 300px;
    padding: 15px;
    border-radius: 10px;
    background-color: #222;
    text-align: center;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
}

#display {
    width: 100%;
    height: 50px;
    font-size: 1.5em;
    text-align: right;
    margin-bottom: 10px;
    padding: 10px;
    border: none;
    background: #333;
    color: cyan;
    box-shadow: 0 0 10px cyan;
}

.buttons {
    display: flex;
    justify-content: space-between;
}

.numbers, .operators {
    display: grid;
    gap: 5px;
}

.numbers {
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
}

.operators {
    grid-template-columns: 1fr;
    width: 25%;
}

button {
    font-size: 1.2em;
    padding: 15px;
    border: none;
    cursor: pointer;
    background: #444;
    color: white;
    border-radius: 5px;
}

button:hover {
    background: cyan;
    color: black;
}

.clear {
    background: red;
    color: white;
}

.equal {
    background: green;
    color: white;
}
