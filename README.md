
# Arkantum Labs Assignment Test - Age Calculator Project
This is a solution for the Front-end Engineer Job application at Arkantum Labs.
  
## Overview 
### The challenge
Users should be able to:
- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
- Any field is empty when the form is submitted
- The day number is not between 1-31
- The month number is not between 1-12
- The year is in the future
- The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
-  **Bonus**: See the age numbers animate to their final number when the form is submitted

  

## Repository Information

-  **Repo URL:** [Age Calculator Arkantum](https://github.com/arbershabani97/age-calculator-arkantum)
-  **Live Site URL:** [Live Site](https://main--friendly-bubblegum-6e840e.netlify.app/)

## Project Overview

This age calculator project was developed in a simplistic manner, utilizing standard CSS, vanilla JavaScript, and Vite (similar to React). The goal was to showcase a deep understanding of fundamental skills without relying on external libraries for validation and forms. In a real-world scenario, additional libraries for validation and form management would be employed.

### Built With
- CSS
- Flexbox
- Vite (JavaScript library)
- Typescript

## Showcase

### Recap of Proudest Solutions

#### 1. CSS Functionality - Counting Animation (Counter Component)

```jsx
const  Counter: FC<CounterProps> = ({ value }) => {
	if (typeof  value === 'string') {
		return  value;
	}

	return (
		<span
			className="counter"
			style={{ '--from':  0, '--to':  value, '--duration':  '1s', '--timing':  'ease-in-out' } as  never}
		/>
	);
};

```

#### 2. Code Structure Cleanliness and Configuration
The project exhibits a clean code structure with well-configured tools such as ESLint and Prettier. The code is easy to read and doesn't require much explanation.

#### 3. Design Implementation
I took the design to the next level by going overboard with creativity. To achieve the desired aesthetic, I explored icon libraries to find suitable icons for the background, meticulously integrating them to ensure a fully matched and visually appealing design.

#### 4. User-Friendly Form Submission
The form solution implemented in the project enhances the user experience by allowing seamless navigation using the 'Tab' key. Additionally, this functionality extends to mobile devices, eliminating the need for manual button presses to submit the form; users can simply press 'Enter' for the click to be registered, ensuring a smooth and intuitive interaction across various devices.
  
## Potential Improvements

- Organize the project as a module, separating main functionality into distinct files.
- Utilize standard validation libraries such as Yup and form management tools like `react-hook-form` for a more robust form handling.  

## Author
-  **Github:** [arbershabani97](https://github.com/arbershabani97)
- **React Interview**: [Optimizing React Code for Scale](https://www.youtube.com/watch?v=mpTWwOwqeX4&ab_channel=Gigster)
- **Youtube:** [Arbër Shabani](https://www.youtube.com/channel/UCQb27MrzB4WFCSPNQYLK7iQ)