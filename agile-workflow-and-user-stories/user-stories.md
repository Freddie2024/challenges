### User Stories 1-2-3-List-App

## User Story 1

### Value proposition

As a **user**,  
I want to **create and prioritize my daily tasks based on their importance and pre-set time slots**,  
So that **I can manage my workload efficiently and focus on my most critical tasks**.

### Description

- User can add tasks into pre-defined slots:
  - 1 task for 3 hours
  - 2 tasks for 1 hour each
  - 3 tasks for 20 minutes each

### Acceptance criteria

- [ ] What happens when a task field is empty?  
       The app should alert the user: "Please fill in all task fields for a balanced day."
- [ ] How should tasks behave?  
       Tasks should be entered into their respective categories and displayed in a structured order (long task first, followed by medium and short tasks).
- [ ] What is the text of an alert?  
       “Please fill in all task fields for a balanced day.”

### Tasks

- [ ] Design the UI with three predefined time categories for tasks.
- [ ] Ensure validation to check that all task fields are filled before saving.
- [ ] Implement drag-and-drop functionality to rearrange tasks within the predefined structure.

---

## User Story 2

### Value proposition

As a **user**,  
I want to **mark tasks as completed or move them to the next day**,  
So that **I can track my daily progress and adjust my workload when necessary**.

### Description

- User can mark each task as completed with a checkbox.
- If a task is not completed, the user can choose to move it to the next day.
- Completed tasks should be crossed out from the daily list, and uncompleted tasks should roll over with the option to modify them.

### Acceptance criteria

- [ ] What happens when a task is marked as completed?  
       The task will be checked off and crossed out from the daily list.
- [ ] What happens when a task is moved to the next day?  
       The task remains on the list, with the option to adjust priority or time allocation for the following day.
- [ ] What is the text of an alert for unfinished tasks?  
       “You have unfinished tasks. Would you like to move them to the next day?”

### Tasks

- [ ] Implement task completion checkboxes.
- [ ] Implement functionality to move tasks to the next day.
- [ ] Create alert mechanism for unfinished tasks.

---

## User Story 3

### Value proposition

As a **user**,  
I want to **set and adjust long-term and short-term goals**,  
So that **I can stay focused on bigger objectives while managing daily tasks**.

### Description

- User can set a long-term overarching focus (e.g., a personal or professional goal).
- User can add up to two short-term goals that help break down larger objectives into manageable tasks.
- Goals can be edited, adjusted, or removed as needed.

### Acceptance criteria

- [ ] What happens when a goal is added?  
       The goal is displayed in a separate section above daily tasks.
- [ ] How should goals behave when they are updated?  
       They can be edited with a text field and should dynamically update without needing to refresh the task list.
- [ ] What is the text of an alert for goal management?  
       “Your long-term goal has been updated” or “Please enter a valid goal description.”

### Tasks

- [ ] Create the UI for setting and displaying long-term and short-term goals.
- [ ] Implement the ability to edit, update, and remove goals.
- [ ] Test for seamless integration of goal adjustments with daily tasks.

---

## User Story 4: Endless To-Do List (Basic Version)

### Value proposition

As a **user**,  
I want to **create an ongoing list of tasks without a daily limit**,  
So that **I can keep track of future tasks, ideas, and longer-term goals in one place**.

### Description

- User can add tasks of varying durations (from 20 minutes to 3 hours) to an ongoing, non-daily list.
- Tasks can include future goals or ideas for later.
- The list is persistent, meaning tasks remain until completed or deleted.
- No need for filtering or categorizing in this version—tasks are added in a simple chronological order.

### Acceptance criteria

- [ ] What happens when a task is added?  
       The task should be added to the bottom of the list, with a simple text input for task description and optional time estimate.
- [ ] What happens when a task is completed?  
       The task is removed from the list, or marked as completed (e.g., with a strikethrough or by moving it to a "completed" section).
- [ ] What is the text of an alert when a task is added?  
       “Task added to your ongoing to-do list.”
- [ ] What is the text of an alert when a task is completed?  
       “Task marked as completed” or “Task removed from your list.”

### Tasks

- [ ] Design a simple interface for adding tasks to an ongoing list.
- [ ] Implement functionality to add tasks with a text description and optional time estimate.
- [ ] Implement task completion behavior (marking or removing).
- [ ] Ensure that tasks persist across sessions (e.g., saved locally or in the cloud).

---

## User Story 5: Endless To-Do List (Advanced Version with Sorting and Filtering)

### Value proposition

As a **user**,  
I want to **categorize, prioritize, and filter tasks on my endless to-do list**,  
So that **I can easily focus on the most important tasks based on their category, priority, and duration**.

### Description

- User can categorize tasks (e.g., work, personal, health).
- User can assign priority levels (e.g., high, medium, low) to tasks.
- User can filter tasks by category, priority, and time duration (e.g., only tasks under 1 hour, or only high-priority tasks).
- The list should allow sorting by priority, due date, or duration.

### Acceptance criteria

- [ ] What happens when a category is assigned to a task?  
       The task is visually grouped under its category and can later be filtered.
- [ ] How should filtering work?  
       User can choose to display tasks based on category, priority, or duration (e.g., showing only "work" tasks, or only tasks that are high-priority and under 1 hour).
- [ ] What is the text of an alert when a task is categorized?  
       “Task categorized as [category].”
- [ ] What happens when tasks are filtered?  
       The view updates to show only tasks that match the selected filter criteria.

### Tasks

- [ ] Add the ability for users to assign categories and priorities to tasks.
- [ ] Implement sorting options (by category, priority, duration, etc.).
- [ ] Design the filtering system and ensure tasks can be displayed according to selected filters.
- [ ] Test the user experience for smooth sorting and filtering functionality.

---

## User Story 6: Selecting Tasks from Endless To-Do List for the Daily 1-2-3 List

### Value proposition

As a **user**,  
I want to **select tasks from my endless to-do list to fill gaps in my daily 1-2-3 list**,  
So that **I can ensure my daily list is complete and I am making progress on my longer-term tasks**.

### Description

- If there is an empty slot on the daily 1-2-3 list (e.g., 1 large, 2 medium, or 3 small tasks), the user can choose tasks from the endless to-do list to fill the gap.
- Once selected, the task is removed from the endless to-do list and appears on the daily list for completion.

### Acceptance criteria

- [ ] What happens when a task is selected from the endless list?  
       The task should be removed from the endless to-do list and added to the appropriate slot on the daily list (e.g., 3-hour, 1-hour, or 20-minute slot).
- [ ] What happens if all daily task slots are full?  
       The user should receive an alert: “Your daily task list is already full.”
- [ ] What happens when there is a gap in the daily list?  
       An option appears to choose from the endless to-do list to fill that gap.
- [ ] What is the text of the alert?  
       “Task added to your daily list and removed from the endless to-do list.”

### Tasks

- [ ] Implement the functionality for selecting tasks from the endless to-do list to fill gaps in the daily list.
- [ ] Ensure tasks are removed from the endless to-do list when selected.
- [ ] Design a user-friendly interface for selecting tasks from the endless list and adding them to the daily list.
- [ ] Create validation for checking if the daily list is full or has gaps.

---

## User Story 7: Moving Unfinished Daily Tasks to the Next Day or Endless To-Do List

### Value proposition

As a **user**,  
I want to **move unfinished tasks from my daily list to the next day or back to the endless to-do list**,  
So that **I can stay organized and ensure tasks that are not completed still remain in my workflow**.

### Description

- At the end of the day, users can choose what to do with unfinished tasks:
  - Move the task to the next day's 1-2-3 list.
  - Return the task to the endless to-do list for future use.
- Tasks should no longer appear on the current day’s list after being moved or reassigned.

### Acceptance criteria

- [ ] What happens when a task is not completed by the end of the day?  
       The user should receive two options: "Move to tomorrow’s list" or "Return to endless to-do list."
- [ ] What happens when the task is moved to the next day?  
       It should appear in the same time slot on the next day’s 1-2-3 list.
- [ ] What happens when the task is returned to the endless to-do list?  
       The task should be removed from the daily list and reappear on the endless to-do list.
- [ ] What is the text of the alert when a task is moved?  
       “Task moved to tomorrow’s list” or “Task returned to your endless to-do list.”

### Tasks

- [ ] Implement functionality for moving tasks to the next day or back to the endless to-do list.
- [ ] Ensure that tasks correctly transition from the daily list to either the next day’s list or the endless to-do list.
- [ ] Create the UI for end-of-day options for unfinished tasks.
- [ ] Test that tasks retain their details (time estimate, description) when moved between lists.

---

## User Story 8: Log-in

### Value proposition

As a **new user**,  
I want to **register and log into the app**,  
So that **I can access my personal to-do lists and save my progress across sessions**.

### Description

- Users can create an account by providing a username, email, and password.
- After registration, users can log in with their credentials.
- Users can log out of the app when needed.

### Acceptance criteria

- [ ] What happens if a required field is empty?  
       The app should display an alert: “Please fill in all required fields.”
- [ ] What happens if login credentials are incorrect?  
       The app should display an alert: “Invalid username or password.”
- [ ] What happens when the user logs out?  
       The user is redirected to the login screen.

### Tasks

- [ ] Implement user registration form with validation.
- [ ] Implement user login functionality with session management.
- [ ] Design simple UI for login and registration.

---

## User Story 9: Navigation

### Value proposition

As a **user**,  
I want to **navigate easily between the daily list, endless to-do list, and settings**,  
So that **I can quickly access the different features of the app**.

### Description

- A basic menu allows users to switch between:
  - Daily 1-2-3 list
  - Endless to-do list
  - Settings (optional)
- Menu should be accessible from all screens.

### Acceptance criteria

- [ ] What happens when the user clicks on a menu item?  
       The app should load the corresponding screen.
- [ ] What happens when the user is on a screen and the back button is pressed?  
       The user is taken to the previous screen or the main menu.
- [ ] What is the text of a success alert when navigation succeeds?  
       No alert is necessary for successful navigation.

### Tasks

- [ ] Design the basic navigation menu.
- [ ] Implement navigation logic for switching between the main sections.
- [ ] Ensure smooth transitions between screens.

---

## User Story 10: Error messages and validation\*\*

### Value proposition

As a **user**,  
I want to **receive clear error messages when something goes wrong**,  
So that **I understand what actions I need to take to correct the issue**.

### Description

- Provide validation for all task inputs (e.g., task description must not be empty).
- Provide clear error messages if any required information is missing or incorrect.

### Acceptance criteria

- [ ] What happens when a required field is left blank?  
       The app should display an alert: “This field cannot be empty.”
- [ ] What happens if there’s a system error during task creation?  
       The app should display an alert: “An error occurred. Please try again.”
- [ ] What is the text of the alert when data is invalid?  
       "Invalid input. Please check your entries."

### Tasks

- [ ] Add validation logic to all input fields (e.g., task creation, registration).
- [ ] Implement clear and user-friendly error messages.
- [ ] Test error handling in all key app functionalities.

---

## User Story 11: Settings

### Value proposition

As a **user**,  
I want to **change basic settings like notification preferences**,  
So that **I can customize the app to suit my preferences**.

### Description

- Users can access a settings screen to:
  - Adjust notification settings (e.g., daily reminders).
  - Log out of the app (if registration/login is implemented).
- Basic user profile info (username, email) can be viewed and updated.

### Acceptance criteria

- [ ] What happens when the user saves a change in settings?  
       The app should display: “Your settings have been saved.”
- [ ] What happens if a change cannot be saved?  
       An alert should display: “Unable to save settings. Please try again.”
- [ ] What happens when the user logs out?  
       The user is logged out and redirected to the login screen.

### Tasks

- [ ] Implement the settings screen with basic functionality.
- [ ] Add options for notifications, profile management, and logout.
- [ ] Ensure data persistence for settings changes.

---

## User Story 12: Color Scheme and Dark Mode

### Value proposition

As a **user**,  
I want to **switch between different color schemes, including a dark mode**,  
So that **I can customize the app's appearance based on my preferences and reduce eye strain in low-light environments**.

### Description

- Users can choose between multiple color schemes (e.g., light mode, dark mode, and potentially other themes).
- The selected color scheme should be applied consistently across all screens of the app.
- The app should default to the system's color mode (e.g., dark mode if the device is set to dark mode).
- Users can manually override the system’s default and choose their preferred theme in the settings.

### Acceptance criteria

- [ ] What happens when the user switches to dark mode?  
       The app should immediately apply a dark theme across all screens and save the preference.
- [ ] What happens when the system default is dark mode?  
       The app should automatically open in dark mode unless the user has manually selected a different theme.
- [ ] What happens if the user switches back to light mode?  
       The app should apply the light theme consistently and save the preference.
- [ ] What is the text of the alert when a theme is switched?  
       No alert is needed—theme changes should be seamless without notifications.

### Tasks

- [ ] Implement a light mode and dark mode for the app.
- [ ] Design the UI with at least one additional color scheme (optional).
- [ ] Add a setting to toggle between the color schemes.
- [ ] Ensure that the app checks the system’s default color mode and applies it automatically.
- [ ] Test the app to ensure consistent color scheme application across all screens.

---

## User Story 13: Adjustable Time Windows with Fixed Structure and 6 Hours Total Time

### Value proposition

As a **user**,  
I want to **adjust the time duration for each task while maintaining the structure of 1 large, 2 medium, and 3 small tasks**,  
So that **I can ensure my daily tasks fit within my available time, while still adhering to a total of 6 hours and the defined task structure**.

### Description

- Users can individually adjust the time for each of the 6 daily tasks (1 large, 2 medium, 3 small) to fit their schedule.
- The total time must **always add up to 6 hours**.

### Acceptance criteria

- [ ] What happens if the total time is not exactly 6 hours?  
       The app should display an alert: “Your tasks should add up to 6 hours. Please adjust the time allocation.”
- [ ] What happens when the user adjusts the time for a task?  
       The app should show how much time is still available for adjustments and prompt the user to ensure that the total time equals 6 hours.
- [ ] What is the text of the alert when time is not distributed correctly?  
       "Tasks should add up to 6 hours and maintain the 1-2-3 structure."

### Tasks

- [ ] Implement the functionality to allow users to adjust the time duration of each task while ensuring the total time equals 6 hours.
- [ ] Create alerts to inform users if the total time is not 6 hours.
- [ ] Design an interface that allows users to easily adjust task times and see how time is being allocated.
- [ ] Test the system to verify that task times always add up to 6 hours and that the structure (1 large, 2 medium, 3 small tasks) is maintained.

---

## User Story 14: Language Selection Feature

### Value proposition

As a **user**,  
I want to **select my preferred language (English or German)**,  
So that **I can use the app in the language I am most comfortable with**.

### Description

- Users are prompted to choose between English and German when creating their account.
- The selected language will apply to the entire app experience, including the registration process.
- The app should update all text, labels, and alerts accordingly based on the chosen language.
- The language preference should be saved so that it persists across app sessions.

### Acceptance criteria

- [ ] What happens during account creation?  
       Users should see a prompt asking them to select their preferred language before completing the registration.
- [ ] What is the default language when the user does not make a selection?  
       The app should default to English if no language is selected during account creation.
- [ ] How does the app handle switching languages after account creation?  
       Users should be able to change their language preference in the settings after account creation.

### Tasks

- [ ] Implement a language selection prompt in the account creation process.
- [ ] Ensure all text and alerts are translated accurately into both English and German based on the selected language.
- [ ] Save the user’s language preference in the app’s settings.
- [ ] Test the functionality to ensure that the selected language applies to all text and alerts during and after account creation.

---

## User Story 15: Optional Pomodoro Timer Functionality

### Value proposition

As a **user**,  
I want to **use an optional Pomodoro timer for tasks that are at least 45 minutes long**,  
So that **I can enhance my focus and productivity by managing my work and break intervals**.

### Description

- Users can activate the Pomodoro timer for tasks that have a duration of **45 minutes or more**.
- The timer will offer users a choice between two default interval settings: **50 minutes of work followed by a 10-minute break** or **20 minutes of work followed by a 5-minute break**.
- Users should also have the ability to set custom work and break intervals.
- Users can start, pause, and reset the Pomodoro timer while working on a task.

### Acceptance criteria

- [ ] What happens if the user tries to activate the Pomodoro timer on a task shorter than 45 minutes?  
       The app should display a message: “The Pomodoro timer is only available for tasks of 45 minutes or longer.”
- [ ] How does the user select their preferred Pomodoro intervals?  
       The app should provide an option to choose between the two default settings (50-10 or 20-5) as well as the ability to set custom intervals.
- [ ] What happens when the Pomodoro timer reaches zero?  
       The app should notify the user that the work session is complete and prompt them to take a break.
- [ ] What is the default timer setting when a user first accesses the Pomodoro feature?  
       The default should be set to **50 minutes of work and 10 minutes of break**.

### Tasks

- [ ] Implement the Pomodoro timer feature with options to choose between 50-10 and 20-5 intervals.
- [ ] Create a prompt that informs users about the timer's availability for tasks under 45 minutes.
- [ ] Design an interface for users to select their preferred intervals and set custom durations.
- [ ] Test the functionality to ensure that the timer operates correctly and notifications are displayed as expected.

---

## User Story 16: Focus Mode with Three Visual Timers During Pomodoro Sessions

### Value proposition

As a **user**,  
I want to **work in a focus mode during Pomodoro sessions**,  
So that **I can stay concentrated on my tasks while visually tracking the time remaining for the current Pomodoro segment, the overall task duration, and the total time allocated for the day**.

### Description

- When users start a Pomodoro session, the app should enter a **focus mode**.
- The focus mode will display **three concentric rings**:
  - The **innermost ring** represents the time remaining for the current Pomodoro segment.
  - The **middle ring** indicates the overall time remaining for the current task.
  - The **outermost ring** shows the total time allocated for all daily tasks (6 hours), filling progressively as tasks are completed.
- The visual design should mimic the style of the Apple Fitness app, ensuring clarity and intuitiveness.

### Acceptance criteria

- [ ] What happens when the user starts a Pomodoro session?  
       The app should enter focus mode, displaying the three rings representing the current Pomodoro, overall task duration, and total daily time.
- [ ] How should the rings be visually represented?  
       The innermost ring should fill according to the current Pomodoro timer, the middle ring should fill based on the time spent on the overall task, and the outer ring should represent the total time allocated for the day.
- [ ] What happens when the Pomodoro session ends?  
       The app should notify the user that the session is complete and provide options to take a break or continue working.
- [ ] How does the app handle interruptions during the focus mode?  
       The app should allow users to pause the session and resume it later without losing their progress.

### Tasks

- [ ] Implement the focus mode feature that activates during Pomodoro sessions with three concentric rings.
- [ ] Design the visual representation for the innermost, middle, and outer rings, ensuring accurate real-time updates.
- [ ] Ensure that the timers update in real-time as the user works on their tasks.
- [ ] Test the functionality to verify that the timers display accurately and that the focus mode enhances the user experience.

---

## User Story 17: Motivational Quotes Based on Personal Values or Selected Categories

### Value proposition

As a **user**,  
I want to **receive motivational quotes daily or with a refresh button**,  
So that **I can stay motivated and inspired while working on my tasks, either through quotes tailored to my personal values or based on other selected categories**.

### Description

- Users can choose to display motivational quotes **instead of or in addition to their long-term goals**.
- Quotes can be refreshed daily or on-demand via a **refresh button**.
- During account creation or later in the settings, users can select from different quote categories, including:
  - **Personal values** (determined through a third-party website and entered into the app).
  - Other categories such as **Sport, Literature, Mindfulness, Feminism**, etc.
- The app uses an API (such as [Quotable](https://quotable.io) or another quotes API) to retrieve quotes based on the user's selected categories or values.

### Acceptance criteria

- [ ] What happens when the user chooses to display motivational quotes?  
       The app should prompt the user to select either personal values-based quotes or from other available categories (e.g., Sport, Literature, etc.).
- [ ] How does the app help users identify personal values?  
       The app should link to a third-party website that helps users identify their top 3 personal values, which can then be used to select relevant quotes.
- [ ] What happens when users press the refresh button?  
       The app should retrieve and display a new motivational quote based on the selected category or values.
- [ ] How can users change their quote preferences?  
       Users should be able to modify their quote preferences (values or categories) through the settings menu.

### Tasks

- [ ] Integrate a quotes API (e.g., Quotable or a suitable alternative) to retrieve motivational quotes.
- [ ] Build a feature that allows users to select quote categories either during account creation or in the settings.
- [ ] Provide an option to display motivational quotes daily or with a refresh button.
- [ ] Implement a link to a third-party website for determining personal values, and enable users to input their values into the app.
- [ ] Test the feature to ensure the quotes are retrieved and displayed based on the selected preferences, and that the refresh function works correctly.

---

## User Story 18: Customizable Design Based on Quote Categories, Personal Values, or User Preferences

### Value proposition

As a **user**,  
I want to **customize the app’s design based on my selected quote categories, personal values, or independent preferences**,  
So that **the app’s look and feel reflect my personality and motivations, providing a more engaging and personalized experience**.

### Description

- The app’s design (including **color scheme, icons, and background images**) will adapt based on the user’s chosen categories for motivational quotes or personal values.
  - For example:
    - **Sport**: Bold colors, active icons, and dynamic backgrounds.
    - **Feminism**: Empowering icons, modern color palette.
    - **Mindfulness**: Soft colors, calming icons, tranquil backgrounds.
- If users opt out of displaying motivational quotes, they can still **manually select a design theme**.
- Users can change the theme in the settings, either linked to quotes/values or as an independent aesthetic preference.

### Acceptance criteria

- [ ] What happens when a user selects motivational quotes?  
       The app’s design should adjust based on the selected category or values, changing the **color scheme, icons, and background** to match the chosen theme.
- [ ] What happens when a user opts not to display quotes?  
       The app should allow users to manually select a design theme based on available categories (e.g., Sport, Feminism, Mindfulness) or other independent aesthetic options.
- [ ] Can the user change the design later?  
       Users should be able to update their design preferences in the settings, either linked to new quotes/categories or independently.

### Tasks

- [ ] Design multiple theme options (color schemes, icons, backgrounds) that match the various motivational categories and values (e.g., Sport, Feminism, Mindfulness, etc.).
- [ ] Build a system that applies these designs dynamically based on the user’s quote preferences or manual theme selection.
- [ ] Ensure that users can choose a theme independent of motivational quotes if no quotes are selected.
- [ ] Test the functionality to confirm that design changes apply correctly and that users can update their theme preferences smoothly.

---
