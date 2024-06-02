# Class Details Hub
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>


<h2>Overview</h2>
<p>This project is a React Native application designed to display details about a class, including images, class information, reviews, and cancellation policy. It also provides functionalities for reserving the class, inviting others, and adding more classes.</p>

<h2>Features</h2>
<ul>
    <li><strong>Image Carousel</strong>: Automatically scrolling image carousel with dot indicators.</li>
    <li><strong>Class Information</strong>: Displays class details such as title, instructor, date, time, location, and additional information.</li>
    <li><strong>Interactive Buttons</strong>: Buttons to invite others, add more classes, and reserve the class.</li>
    <li><strong>Notifications</strong>: Shows toast notifications for different actions on Android and alerts on iOS.</li>
    <li><strong>Reviews and Cancellation Policy</strong>: Sections to display reviews and cancellation policy with links to view more details.</li>
</ul>

<h2>Installation</h2>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/your-repo/Class-Details.git</code></pre>
    </li>
    <li>Navigate to the project directory:
        <pre><code>cd ClassDetails</code></pre>
    </li>
    <li>Install the dependencies:
        <pre><code>npm install</code></pre>
    </li>
    <li>Run the application:
        <pre><code>npx react-native run-android  # For Android
</code></pre>
    </li>
</ol>

<h2>Usage</h2>

<h3>Image Carousel</h3>
<p>The image carousel automatically scrolls through a series of images every 3 seconds. Users can manually scroll through the images, and the dot indicators at the bottom show the currently active image.</p>

<h3>Class Information</h3>
<p>The app displays the following class information:</p>
<ul>
    <li><strong>Title</strong>: "Class Details Hub"</li>
    <li><strong>Description</strong>: "Physics: Instructor Dr. Pauline Adams"</li>
    <li><strong>Time</strong>: "Sun, May 19 · 9:00 AM - 10:45 AM"</li>
    <li><strong>Location</strong>: "Central Park, New York City"</li>
    <li><strong>Additional Info</strong>: "Practicals: Quantum Mechanics, Light & Optics"</li>
</ul>

<h3>Buttons</h3>
<ul>
    <li><strong>Invite Others</strong>: Sends an invite notification.</li>
    <li><strong>Add More</strong>: Opens the add more functionality.</li>
    <li><strong>Reserve</strong>: Reserves the class and shows a reservation notification.</li>
</ul>

<h3>Reviews and Cancellation Policy</h3>
<ul>
    <li><strong>Reviews</strong>: Displays a review score with a link to see all reviews.</li>
    <li><strong>Cancellation Policy</strong>: Shows the cancellation policy with a link to learn more.</li>
</ul>

<h2>Components</h2>

<h3>DotIndicator</h3>
<p>A functional component to display active and inactive dots for the image carousel.</p>

<h3>App</h3>
<p>The main component that renders the entire UI and contains the following:</p>
<ul>
    <li>Image carousel with auto-scrolling functionality.</li>
    <li>Class details section.</li>
    <li>Buttons to invite, add more, and reserve the class.</li>
    <li>Sections for reviews and cancellation policy.</li>
</ul>

<h2>Toast Notifications</h2>
<p>The app uses <a href="https://github.com/calintamas/react-native-toast-message">react-native-toast-message</a> for displaying toast notifications. Different types of notifications are shown for different actions.</p>
<ul>
    <li><strong>Android</strong>: Toast notifications appear at the bottom of the screen.</li>
   
</ul>

<h2>Styling</h2>
<p>The styles are defined using <code>StyleSheet.create</code> and include styles for the container, image carousel, buttons, and various text elements. The styles ensure a consistent and visually appealing layout across different devices.</p>

<h2>Contributing</h2>
<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature-branch</code>).</li>
    <li>Make your changes.</li>
    <li>Commit your changes (<code>git commit -am 'Add new feature'</code>).</li>
    <li>Push to the branch (<code>git push origin feature-branch</code>).</li>
    <li>Create a new Pull Request.</li>
</ol>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the LICENSE file for details.</p>

<h2>Acknowledgements</h2>
<ul>
    <li><a href="https://reactnative.dev/">React Native</a></li>
    <li><a href="https://github.com/calintamas/react-native-toast-message">react-native-toast-message</a></li>
    <li><a href="https://www.freepik.com/">Freepik</a> for images</li>
</ul>


</body>
</html>
