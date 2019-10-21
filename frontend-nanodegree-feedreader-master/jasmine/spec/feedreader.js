/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('ensure the URL is defined and that the URL is not empty', function() {
            for (let feed of allFeeds) {
            expect(feed.url).toBeDefined();
            expect(feed.url.length).not.toEqual(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('ensure the name is defined and that the names is not empty', function() {
            for (let feed of allFeeds) {
            expect(feed.name).toBeDefined();
            expect(feed.name.length).not.toBe(0);
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        const menu = document.querySelector('body');

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('ensure the menu element is hidden by default', function() {
            expect(menu.classList).toContain('menu-hidden');
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('change the menu visibility when clicked', function() {
            const clickedIcon = document.querySelector('.menu-icon-link');

            clickedIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBeFalsy();

            clickedIcon.click();
            expect(menu.classList.contains('menu-hidden')).toBeTruthy();
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, done);  
        });
            
        it('ensures there is at least one entry in .feed container', function() {
            let feedContainer = document.querySelectorAll('.feed .entry');
            expect(feedContainer.length).not.toEqual(0);            
        });
    });
            
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        let previousTitle;
        let previousEntry;

       /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                previousTitle = document.querySelector('.header-title').innerText;
                previousEntry = document.querySelector('.entry').innerText;                
                loadFeed(1, done)              
            });  
        });
        
        it('ensures that the content is actually changes', function() {
            let newTitle = document.querySelector('.header-title').innerText;
            let newEntry = document.querySelector('.entry').innerText;
            expect(newTitle).not.toEqual(previousTitle);
            expect(newEntry).not.toEqual(previousEntry);        
        });
    });

}());
