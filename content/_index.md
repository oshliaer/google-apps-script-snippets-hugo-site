# Google Apps Script Snippets

{{< figure src="https://ssl.gstatic.com/images/branding/product/2x/apps_script_64dp.png" >}}

{{< toc >}}

## What is it

This is a systematic view of Google Apps Script [snippets][1] sorted and grouped using [Hugo][2]. It also uses [watchman][3] and [rsync][4] to build locally.

## Why is this necessary

The main reason is to share knowledge. Often the documentation is insufficient to reveal the capabilities of a method or coding approach.

When I was learning I missed such samples. I really hope it will be useful for you too.

## What is a snippet

Snippet is a programming term for a small region of re-usable source code, machine code, or text. These snippets are focused on simple and common use. Very often (in Google Apps Script) we need to copy and paste some code into our project for everything to work. These snippets are for this.

## How to use

### Main approach

You just copy the files to your project.

Almost every snippet is provided with a main code file and a manifest. You need the manifest to know what additional libraries or services or scopes you may need to make the snippet work.

### An example of a simple manifest

**appsscript.json**

```json
{
  "timeZone": "America/New_York",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

### An example of a manifest with dependencies

Below is an example when using Advanced Docs Service. Usually, updating the manifest is enough for the program to request new permissions. Stay attentive.

**appsscript.json**

```json
{
  "timeZone": "Europe/Moscow",
  "dependencies": {
    "enabledAdvancedServices": [
      {
        "userSymbol": "Docs",
        "serviceId": "docs",
        "version": "v1"
      }
    ]
  },
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8"
}
```

### How to see my manifest

You need to check-in the property `Show "appsscript.json" manifest file in editor` in your project settings.

### How to merge manifests

When you take a snippet, you get two manifests: yours one in the current project and a snippet manifest.

The snippet's manifest should just extend your manifest. From the example above, you can see that we need to add only one object to the simple manifest.

Here it is

```json
{
  "enabledAdvancedServices": [
    {
      "userSymbol": "Docs",
      "serviceId": "docs",
      "version": "v1"
    }
  ]
}
```

### How can I help

- Leave a request of snippet or suggestion for improvement in the repository [contributorpw/google-apps-script-snippets/issues][5]
- Share the snippets
- Contribute [contributorpw/google-apps-script-snippets][1]
- Contribute [contributorpw/google-apps-script-snippets-hugo-site][6]
- Contribute [janraasch/hugo-bearblog][7]
- Do know something cool about Google Apps Script? Leave an issue or PR [contributorpw/google-apps-script-awesome-list][8]

[1]: https://github.com/contributorpw/google-apps-script-snippets
[2]: https://gohugo.io
[3]: https://github.com/facebook/watchman
[4]: https://rsync.samba.org/
[5]: https://github.com/contributorpw/google-apps-script-snippets/issues
[6]: https://github.com/contributorpw/google-apps-script-snippets-hugo-site
[7]: https://github.com/janraasch/hugo-bearblog
[8]: https://github.com/contributorpw/google-apps-script-awesome-list
