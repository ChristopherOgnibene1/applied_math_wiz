'''
Name:  Chris Ognibene
Date Created:  30 April 2016
Last Edited:  1 May 2016
'''

#import packages
import ctypes #windows message prompt box
import time   #current date and time

#source the data file (text-delimited file)
input = open('C:/Users/Chris/Documents/Further Learning/Python Scripts/Rent_Notification/data.txt','r')

#create a list to store each line of the file
inputSplit = []

#iterate through input file and store each line in the list
i = 0 #counter
for line in input.readlines():
	inputSplit.insert(i,line)
	i+=1

#closes input file
input.close()

#retrieves the current day from Windows
currentDay = time.strftime("%d")

#create a list to store the output string (as text)
j = 0 #counter
output_list = []

for i in inputSplit:
	matching_record = i.split("|",4)[2]
	if (currentDay == matching_record):
		output_list.insert(j,i)

#outputs the results if the results list is not empty
if len(output_list) > 0: 
	output_string = inputSplit[0] + "\n\n"
	for entry in output_list:
		output_string = output_string + entry + "\n"
		
	ctypes.windll.user32.MessageBoxA(0, output_string, "Notification", 1)

