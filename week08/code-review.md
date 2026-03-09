# Code Review — Week 08

## 1. What parts of your code were hardest to read?  
In all honesty, for me, majority if not all of the code was hard to understand and complete by myself. Obviously given my little experience, I can identify some patters in code when I look at different files but it is nearly impossible for me to tell what the purpose of a file is and what it is doing exactly without reffering to external resources.

## 2. Where did you duplicate logic?  
Looking up a package by ID was repeated in getPackage, updatePackage, and deletePackage. A helper function was added to findPackageById to avoid repeating the same code.

## 3. What naming improvements did you make?  
I used clearer names like packageItem instead of pkg and nextPackageId to show its purpose. This makes the code easier to read.

## 4. What documentation was missing before?  
Most documentation were present but a project documentation in the form of a README.md was missing and this was added as a part of the assignment.

## 5. If another developer inherited this API, what would confuse them?  
Personally, if another developer reads this code, I think they will not be confused. This is not because I understand all the code and I can tell that it is clean, because honestly I dont/cant. But given that there were no erros when checking for syntax and problems with eslint, and given that there is sufficient documentation and a organized file structures, I think that another developer will not be confused.