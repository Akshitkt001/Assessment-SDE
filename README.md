# Assessment-SDE
Live Project Link:https://angular-akxt19.stackblitz.io/
## Database Structure

### Seats Table
- **Table Name:** `seats`

#### Columns:
- **row_number (INT)** – Represents the row of seats (e.g., 1 to 10).
- **seat_number (INT)** – Represents the individual seat number within a row (e.g., 1 to 7).
- **is_booked (BOOLEAN)** – Indicates if the seat is booked (1 for booked, 0 for available).

### Example Representation
#### Seats Data:
- **Rows:**
  - Row 1: `[0, 0, 0, 0, 0, 0, 0]`
  - Row 2: `[0, 0, 0, 0, 0, 0, 0]`
  - ...
  - Row 10: `[0, 0, 0]` (last row with 3 seats)

This structure tracks the availability of seats in your reservation system.
