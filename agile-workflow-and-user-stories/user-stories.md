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

Das ist eine tolle Idee! Hier ist eine User Story für die "Endlose To-Do-Liste", basierend auf deinem Schema und der ersten Version der Funktion, die einfacher gehalten ist:

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

Das ist eine großartige Erweiterung, die die Flexibilität zwischen der täglichen 1-2-3-Liste und der endlosen To-Do-Liste erhöht! Hier sind zwei überarbeitete User Stories, die diese neuen Funktionen berücksichtigen:

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

Um eine einfache App innerhalb von 3 Tagen fertigzustellen, solltest du dich auf die essenziellen Funktionen konzentrieren und diese in klare User Stories unterteilen. Basierend auf den bereits erstellten User Stories und der grundlegenden Struktur, könnten die folgenden Stories noch fehlen:

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
