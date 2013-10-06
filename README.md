# Creating a Localized Version of Letterman #

## Modifying LettermanTemplate.capx ##
The template is editable via the free version of [Construct 2](http://scirra.com); however, it contains very close to the maximum number of events and layers supported by that version. 

To localize the game to a new language ([German](http://apps.microsoft.com/windows/en-us/app/buchstaben-bub/ffbf8c8c-4eda-4ba1-8a0d-62dba57a3166), [Turkish](http://apps.microsoft.com/windows/en-us/app/kelime-adam/755c32ba-fae8-4aa7-921a-43dd6dbd56c1), [Spanish](http://apps.microsoft.com/windows/en-us/app/amigoalfabeto/258c07a4-2946-4e78-bcb7-90935caf103b), and [Portuguese](http://apps.microsoft.com/windows/en-us/app/o-mensageiro/6bbecaf9-ebff-4431-aa74-ee1e3c0349d7) versions in the Windows Store have already been downloaded a combined 4000 times!) follow these steps:

1. Edit the **LocalizationFunctions** event script. Here is where you will provide the quantity of letters in the target language (**TOTAL_LETTERS**), the actual letters of that localized alphabet (the **LETTERS** variable), and the names of the images corresponding to each letter (the **WORDS** variable).

1. Wherever you see text included in double-brackets (“[[ ]]”) in the ternary operator ( ? : ), you’ll need to provide a translation of the associated English text in the target language. 

1. Gather your images for each of the letters in the target alphabet, and add them as the animation frames for the **Target** object and the **TargetHint** object.  These objects are nearly identical, but have different instance variables and origin points for the image.

1. Modify the button imagery (animation frame 1) for the target language for **ChangeGameButton**, **PlayAgainButton**, **WordsButton**, and **LettersButton**.

1. **IMPORTANT:** If you import different background music, be sure to update the four references to **BackgroundMusic** within the **GameEvents** script BEFORE removing the Sound assets named **BackgroundMusic**.

## After Exporting the Windows 8 project from Construct 2 ##
1. Open the exported project in Visual Studio.


1. Delete the following files from the project:
	- privacy.html
	- about.html
	- support.html
	- WindowsStoreProxy.xml

1. Add the following files from the GitHub repository **VSAssets** directory to the Visual Studio project:
	- about.html
	- credits.html
	- support.html
	- translate.css
	- translate.js

1. Edit the following HTML files to reflect your application in both English and the localized language:
	- about.html
	- credits.html
	- support.html

1. Copy and paste the following code verbatim into index.html immediately before the line
**App.start();**

            app.addEventListener("settings", function (e) {
                var cmds = {};
                cmds.about =  { title: "About", href: "/about.html" };
                cmds.credits = { title: "Credits", href: "/credits.html" };
                cmds.support = { title: "Support", href: "/support.html" };

                e.detail.applicationcommands = cmds;
                WinJS.UI.SettingsFlyout.populateSettings(e);
            });


1. Edit the XML of **package.appxmanifest** directly (select the file and press F7). You should see the following entry:

		  <Resources>
		    <Resource Language="x-generate"/>
		  </Resources>

    Replace it with:

		  <Resources>
		    <Resource Language="fr-fr" />
		    <Resource Language="en-us" />
		  </Resources> 

	where the first language entry reflects the localization language you are using (e.g., French in the example above). Leave the second entry as **en-us**. This will enable you to provide a localized description and graphic assets in addition to an English description and assets when you submit the application to the Windows Store.

1. Build the application in Visual Studio. You may receive errors referring to app manifest validation failures.  If so, double-click on **package.appxmanifest** in the Visual Studio project, navigate to the Packaging tab, and provide the missing data. 	

## Submitting the Application to the Windows 8 Store ##
Follow the instructions in the [Scirra to Store document](https://github.com/jimoneil/Construct-2/blob/master/Scirra2Store.pdf?raw=true) beginning at step 6 to provide the required graphic assets and to associate the application with your Windows Store account. 

If you do publish an application based on this template, [send me a quick note](mailto:jim.oneil@outlook.com) with the app name!
