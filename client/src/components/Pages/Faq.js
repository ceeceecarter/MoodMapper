import React from "react";
import "./PagesStyles/Faq.css";


const Faq = () => (
  <div>
    <h1>Frequently Asked Questions</h1>
    <ul>
      <li>Who is this for?</li>
      <p>Anyone who wants to track their mood or mental health over time. Our hope is you will begin to recognize patterns and make more informed decisions based on the details of your day.</p>
      <li>How does this work?</li>
      <p>Every day you can log in and take a short survey that will measure your feelings. You can also make journal entries. The survey responses will be graphed over time. In this way, you can look at a specific day on the graph to see the corresponding journal entries.</p>
      <li>Does this replace seeing a mental health professional?</li>
      <p>No. This is a tool you may choose to use with your therapist, but it is not intended to supplement professional mental health care.</p>
      <li>Why don't I see my specific diagnosis on here?</li>
      <p>We chose to focus on anxiety and depression because they are the most commonly diagnosed mood disorders.</p>     
    </ul>
  </div>
);
export default Faq;