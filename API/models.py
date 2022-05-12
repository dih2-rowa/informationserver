# from difflib import restore
# import sqlite3

# class Schema:
#     def __init__(self):
#         #connect db
#         self.conn = sqlite3.connect('TODO.db')
#         self.create_todo_table()

#     def create_todo_table(self):
#         query = """
#             CREATE TABLE IF NOT EXISTS "Todo" (
#                 id INTEGER PRIMARY KEY,
#                 Title TEXT,
#                 Description TEXT
#             );
#          """
#         self.conn.execute(query)
#         print("DB created")

# class TodoModel:

#     def __init__(self):
#         self.conn = sqlite3.connect('todo.db')

#     def create(self, title, description):
#         query = f'insert into Todo (Title, Description) values ("{title}", "{description}")'
#         # execute query
#         result = self.conn.execute(query)
#         # update database
#         self.conn.commit()

#         return f"Ok {result.lastrowid}"
    
#     def get_all(self):
#         query = 'select * from Todo;'
#         return self.conn.execute(query).fetchall()

    