const questions = [
  ["Which of the following is not a stable sorting algorithm in its typical implementation?", "Insertion Sort", "Bubble Sort", "Quick Sort", "Merge Sort", "3"],
  ["Consider a situation where swap operation is very costly. Which of the following sorting algorithms should be preferred so that the number of swap operations are minimized in general?", "Heap Sort", "Selection Sort", "Insertion Sort", "Merge Sort", "2"],
  ["You have to sort 1 GB of data with only 100 MB of available main memory. Which sorting technique will be most appropriate?", "Merge Sort", "Heap Sort", "Insertion Sort", "all", "1"],
  ["What is the worst case time complexity of insertion sort where position of the data to be inserted is calculated using binary search?", " N", " NlogN", "N^2", "None of these", "3"],
  ["Which sorting algorithm will take least time when all elements of input array are identical? Consider typical implementations of sorting algorithms.", "Insertion Sort", "Heap Sort", "Selection Sort", "Quick Sort", "1"],
  ["Which of the following sorting algorithms has the lowest worst-case complexity?", "Merge Sort", "Bubble Sort", "Quick Sort", "Selection Sort", "1"],
  ["Which of the following algorithm design technique is used in merge sort?", "Divide and conquer", "Greedy Method", "Dynamic Programing", "Backtracking", "1"],
  ["You have to sort a list L, consisting of a sorted list followed by a few ‘random’ elements. Which of the following sorting method would be most suitable for such a task?", "Bubble Sort", "Insertion Sort", "Heap Sort", "Merge Sort", "2"],
  ["Which of the below given sorting techniques has highest best-case runtime complexity.", "Quick Sort", "Insertion Sort", "Bubble Sort", "Selectio Sort", "4"],
  ["Assume that a merge sort algorithm in the worst case takes 30 seconds for an input of size 64. Which of the following most closely approximates the maximum input size of a problem that can be solved in 6 minutes?", "256", "512", "1024", "2048", "2"],
  ["Assume that we use Bubble Sort to sort n distinct elements in ascending order. When does the best case of Bubble Sort occur?", "When elements are sorted in ascending order", "When elements are sorted in descending order", "When elements are not sorted by any order", "None of these", "1"],
  ["Consider an array of elements arr[5]= {5,4,3,2,1} , what are the steps of insertions done while doing insertion sort in the array.", "4 5 3 2 1 3 4 5 2 1 2 3 4 5 1 1 2 3 4 5", "5 4 3 1 2 5 4 1 2 3 5 1 2 3 4 1 2 3 4 5", "4 3 2 1 5 3 2 1 5 4 2 1 5 4 3 1 5 4 3 2", "4 5 3 2 1 2 3 4 5 1 3 4 5 2 1 1 2 3 4 5", "1"]
];

let currentQuestionIndex = 0;
let selectedAnswer = null;
let score = 0;
let quizCompleted = false;

const questionElement = document.getElementById('question');
const option1Element = document.getElementById('option1');
const option2Element = document.getElementById('option2');
const option3Element = document.getElementById('option3');
const option4Element = document.getElementById('option4');
const nextButton = document.getElementById('next');
const quitButton = document.getElementById('quit');
const resultElement = document.getElementById('result');

const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion[0];
    option1Element.innerText = currentQuestion[1];
    option2Element.innerText = currentQuestion[2];
    option3Element.innerText = currentQuestion[3];
    option4Element.innerText = currentQuestion[4];
};

const handleOptionChange = (event) => {
    selectedAnswer = event.target.value;
};

const handleNextQuestion = () => {
    if (selectedAnswer === null) {
        alert("Please select an option.");
        return;
    }

    if (selectedAnswer === questions[currentQuestionIndex][5]) {
        score++;
    }

    selectedAnswer = null;

    if (currentQuestionIndex === questions.length - 1) {
        quizCompleted = true;
        showResult();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
};

const handleQuit = () => {
    quizCompleted = true;
    showResult();
};

const showResult = () => {
    const percentage = (score / questions.length) * 100;
    resultElement.style.display = 'block';
    resultElement.innerHTML = `
        <h2>Quiz Finished</h2>
        <p>Your Score: ${score} out of ${questions.length}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
    `;
    document.getElementById('quiz').style.display = 'none';
};

document.getElementById('opt1').addEventListener('change', handleOptionChange);
document.getElementById('opt2').addEventListener('change', handleOptionChange);
document.getElementById('opt3').addEventListener('change', handleOptionChange);
document.getElementById('opt4').addEventListener('change', handleOptionChange);
nextButton.addEventListener('click', handleNextQuestion);
quitButton.addEventListener('click', handleQuit);

loadQuestion();