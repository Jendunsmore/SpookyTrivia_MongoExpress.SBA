/*
Requirements:
1. Use at least 3 different data collections within the data (such as users, posts, or comments).
2. Utilize reasonable data modeling practices
3. Create GET routes for all data that should be exposed to the client, using appropriate query
commands to retrieve the data from the database
4. Create POST routes for data, as appropriate, using appropriate insertion commands to add
data to the database. At least one data collection should allow for client creation via a POST request.
5. Create PATCH or PUT routes for data, as appropriate, using appropriate update commands to change
data in the database. At least one data collection should allow for client manipulation via a PATCH
or PUT request.
6. Create DELETE routes for data, as appropriate, using appropriate delete commands
to remove data from the database. At least one data collection should allow for
client deletion via a DELETE request.
7. Include sensible indexes for any and all fields that are queried frequently. For fields
that may have a high write-to-read ratio, you may forgo indexes for performance
considerations. Make comments of this where applicable.
8. Include sensible MongoDB data validation rules for at least one data collection.
Note: this may be accomplished in a number of ways. If you choose to perform this
task outside of your application's code, you must include a way to test the validation
within the application's routes. This can be as simple as providing a POST route that
attempts to create an invalid document and displays the resulting error.
9. Populate your application's collections with sample data illustrating the use case of
the collections. You must include at least five sample documents per collection.
Note: Double-check this requirement before submission. Testing your delete routes
may leave you under the requirement. To be safe, populate your collections with
sample data well above the requirement (we recommend 10-20 documents).
10. Utilize reasonable code organization practices.
11. Ensure that the program runs without errors (comment out things that do not work,
and explain your blockers - you can still receive partial credit).
*/

