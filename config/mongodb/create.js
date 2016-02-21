db.runCommand('use priorityze');

db.createUser({
    "user": "padmin",
    "pwd": "p123",
    "roles": [
        { role: "userAdmin", db: "priorityze" },
        "readWrite"
    ]
},  { w: "majority", wtimeout: 5000});

