* Project Path 3 
Needs:
    1. Registration Form
    2. Log-In Form
    3. Default redirect from dashboard if not logged in (Home page/conditional rendering)
    4. Local storage for staying logged in if page is refreshed
    5. shows "Log out" if already logged in
    6. API call for logging in/creating new acct
    7. validation for log in and register forms

Pages:
    1. Home Page:
        -If not logged in:
            -typical product display, but when purchase button or cart button is clicked, redirects to log-in page
            -some extra text window that says you need to log in to make a purchase
            -register button and log-in button shown
        -If logged in: 
            -displays normal product page, with log-out button in place of log-in, register button not shown
            -menu display for "my Items" "my account", etc. 
    2. Log-In Page:
        -input bar for email address (validated)
        -input bar for password (validated)
        -Text indicating if you don't have an account, create one, includes register button
        -submit button (onEnter?)
    3. Register Page:
        -input bar for email address (validated)
        -input bar to confirm
        -input bar for password
        -input bar to confirm
        -Text indicating if you already have an account, to log in, includes log-in button
        -submit button (onEnter?)


