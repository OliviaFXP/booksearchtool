# Answers to technical questions

1. How long did you spend on the coding assignment? </br>I spent one day and a half on coding the assignment.
    * What would you add to your solution if you had more time?\
      I would add loading spinner on page to show user that search button is hit and just wait for the returning result.</br> I would also add table pagination.
    * If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
      I would add some needed unit testing with Jest and Enzyme, and also add some end to end testing with Cypress
2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.</br>
    The latest version of Javascript is ECMAScript 2020(11th Edition). I use one of the most useful feature "Optional Chaining" in my coding of this assignment.The code snippet
    is as followed:
```javascript
    for (var i = 0; i < allBooksResp.docs.length; i++) {      
      results.push({
        key: allBooksResp.docs?.[i].key,
        title: allBooksResp.docs?.[i].title,
        book_cover_url: "https://covers.openlibrary.org/b/isbn/" + allBooksResp.docs?.[i].isbn?.[0] + "-S.jpg",
        author: allBooksResp.docs?.[i].author_name?.join?.(","),
        published_date: allBooksResp.docs?.[i].publish_date?.join?.(","),
        most_recent_publish_year: allBooksResp.docs?.[i].publish_year?.sort?.((a, b) => b - a)[0]
      })
    }
```
3. How would you track down a performance issue in production? Have you ever had to do this?
   I would run the application or work with support team to run the application if I don't have access, open browser\ developer tool
	 to observe "Performance/Memory/Network" related data and start troubleshooting, I would also manipulate the\ DOM/CSS/javascript if needed
	 to help tract down performance issue. 
4. How would you improve the API that you just used?
   Currently it is returning all of the data at once which it is quite heavy, it should consider adding pagination support,\ 
	and also the shape of data include many fields some consumers may not need 
    
    
5. Please describe yourself using correctly formatted JSON.
```json
{
  "name":"Olivia",
  "description":
   [
    {"aspet": "personality", "strengths": "creative, curious"},
    {"aspet":"workStyle", "strengths":"passion, hardworking"},
    {"aspet":"communication", "strengths":"open-mindedness, good-listener"},
    {"aspet":"careerGoal","strengths":"full-stack"}
   ]  
}
```
