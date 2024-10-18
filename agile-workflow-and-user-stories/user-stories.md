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
