players = [
    {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    },
    {
        "name": "Damian Lillard", 
        "age":33,
        "position": "Point Guard", 
        "team": "Portland Trailblazers"
    },
    {
        "name": "Joel Embiid", 
        "age":32,
        "position": "Power Foward", 
        "team": "Philidelphia 76ers"
    },
    {
        "name": "DeMar DeRozan",
        "age": 32,
        "position": "Shooting Guard",
        "team": "Chicago Bulls"
    }
]

class Player:
    def __init__(self,data):
        self.name = data ['name']
        self.age = data ['age']
        self.position = data ['position']
        self.team = data ['team']
    @classmethod
    def add_Players(cls, data):
        player_objects = []
        for dict in data:
            player_objects.append(cls(dict))
        return player_objects
    def __str__(self):
        display = (f"player : {self.name} \nage : {self.age} \nposition {self.position} \nTeam {self.team}")
        return display
    




kevin = {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
}
jason = {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
}
kyrie = {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
}
Player_jason = Player(jason)
Player_Kevin = Player(kevin)
Player_kyrie = Player(kyrie)
print(Player_jason)
print(Player_Kevin)
print(Player_kyrie)
print(Player_kyrie)

# Additional player data
lebron = {
    "name": "LeBron James",
    "age": 36,
    "position": "Small Forward",
    "team": "Los Angeles Lakers"
}

steph = {
    "name": "Stephen Curry",
    "age": 33,
    "position": "Point Guard",
    "team": "Golden State Warriors"
}

# Adding new players
additional_players_data = [lebron, steph]
additional_player_objects = Player.add_players(additional_players_data)

# Printing information about the new players
for player in additional_player_objects:
    print(player)
