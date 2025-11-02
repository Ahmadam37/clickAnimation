# ‍View Transition API Example

Smooth transitions between pages and DOM states? The View Transition API makes it easy. Here you find the example code of a YouTube Tutorial I have created. 

💻 Demo Link: https://viewtransition.bernack.com/from.html

🍿 YouTube Tutorial: https://youtu.be/nZtg-xzhy0g

*Note:* You should run this example on a local server as the browsers don't allow the View Transition API to work on `file://` URLs. You can use the `Live Server` extension in VSCode or any other local server of your choice.


### Troubleshooting

I noticed that if there is no JavaScript code on the target page (`to.html`) of a view transition at all, the transition will not work all the time in Chrome. This is why I added the `<script src="script.js"></script>` tag to the target page as well, even though it's only needed on the source page.