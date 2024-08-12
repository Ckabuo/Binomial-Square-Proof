# Square of a Binomial Proof

## Overview

This project provides an interactive demonstration of the mathematical proof for the square of a binomial, illustrated through both algebraic and geometric interpretations. The project is built using HTML, CSS, Bootstrap, and JavaScript. It allows users to input values for two variables, `a` and `b`, and then calculates and displays the result of \((a + b)²\) both algebraically and visually.

## Features

- **Algebraic Calculation**: The project expands the binomial expression \((a + b)²\) into its components: \(a²\), \(2ab\), and \(b²\), and displays the calculated result.
- **Geometric Visualization**: A dynamic square illustration shows the relationship between the algebraic terms and their geometric equivalents, helping to visualize how the area of the square corresponds to the expanded binomial expression.
- **Responsive Design**: The project is fully responsive and adapts to different screen sizes, ensuring a consistent user experience across devices.

## Technologies Used

- **HTML5**: Structure and content of the webpage.
- **CSS3**: Custom styling for layout and design, including responsive elements.
- **Bootstrap 5**: Framework for responsive design and components.
- **JavaScript**: Logic for calculating the binomial expansion and dynamically generating the geometric visualization.

## Getting Started

### Prerequisites

To run this project locally, you'll need a web browser that supports modern HTML5, CSS3, and JavaScript.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Ckabuo/square-of-binomial-proof.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd square-of-binomial-proof
   ```

3. **Open the `index.html` file** in your preferred web browser:
   ```bash
   open index.html
   ```

### Usage

1. **Input Values**:
   - Enter numerical values for `a` and `b` in the provided input fields.
   - Click the "Calculate" button.

2. **View Results**:
   - The expanded form of \((a + b)²\) will be displayed below the form, showing the calculated values of \(a²\), \(2ab\), and \(b²\).
   - A square diagram will be generated to visually represent the geometric interpretation of the binomial expansion.

3. **Responsive Design**:
   - Resize the browser window to see how the layout adjusts to different screen sizes, maintaining clarity and usability.

### Example

#### Input:
- `a = 3`
- `b = 4`

#### Output:
- **Algebraic**:
  \[
  (3 + 4)² = 3² + 2 \times 3 \times 4 + 4² = 9 + 24 + 16 = 49
  \]
- **Geometric**:
  - A square layout depicting the areas corresponding to \(a²\), \(2ab\), and \(b²\) that add up to the total area representing \((3 + 4)²\).

## Project Structure

```plaintext
square-of-binomial-proof/
├── index.html   # Main HTML file containing the structure
├── style.css    # Custom CSS for styling and responsiveness
└── script.js    # JavaScript file for calculations and dynamic rendering
```

## Contributing

Contributions are welcome! If you have ideas for improvements or find any issues, feel free to fork the repository and submit a pull request. Please make sure your contributions adhere to the existing code style and conventions.
