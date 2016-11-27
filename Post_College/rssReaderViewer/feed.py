#Chris Ognibene
#21 May 2016
#RSS Feed Reader Python Scripts\RSS
#Source:  https://www.youtube.com/watch?v=2WXTMr2zJOk 

#import the feedparser path
import sys
sys.path.insert(0,"C:\Users\Chris\Anaconda2\Lib\site-packages")
import feedparser
import csv

#output directory bin
output_str = "C:/Users/Chris/Documents/Further Learning/Python Scripts/RSS Feed Reader/Output/"

#import the current date and time
import datetime
current_date = datetime;

#import text file containing links
fileInput = open('C:\Users\Chris\Documents\Further Learning\Python Scripts\RSS Feed Reader\Links.txt','r')
fileInputRead = csv.reader(fileInput)
fileInputList = list(fileInputRead)

for entry in fileInputList:
	if entry[0] <> 'Name':
		d = feedparser.parse(entry[1])
		outputFile = open(output_str + entry[0]+ '.txt','w').close()
		outputFile = open(output_str + entry[0]+ '.txt','w')

		for post in d.entries:
			outputFile.write((post.title + " | " 
						+ post.link + "\n").encode('utf-8'))
		outputFile.close()
