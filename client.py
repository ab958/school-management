import requests
import json

url = 'http://localhost:3000/schools'

# Example JSON document
data = {
    "name": "School-A",
    "status": "old",
    "startTime": "8:30am",
    "endTime": "1:30pm",
    "shift": "Morning",
    "address": {
        "town": "Nehar Kot",
        "tehsil": "Barkhan",
        "district": "Barkhan",
        "state": "Balochistan",
        "address": "address-1",
        "latitude": 29.79,
        "longitude": 69.47
    },
    "hasProjector": False,
    "hasLaptop": False,
    "organization": {
        "name": "publicschools"
    }
}

# POST request
response = requests.post(url, json=data)
print('POST response:', response.json())

# Update some fields
data["status"] = "new"
response = requests.put(url, json=data)
print('PUT response:', response.json())

# Get all schools
response = requests.get(url)
print('GET all schools:', response.json())

# Get specific school by ID
school_id = 1  # Replace with the actual ID
response = requests.get(f'{url}/{school_id}')
print('GET school by ID:', response.json())

# Delete school by ID
response = requests.delete(f'{url}/{school_id}')
print('DELETE response:', response.status_code)
