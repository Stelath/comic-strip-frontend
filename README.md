# UGAHacks-2024

# Comic Strip

## Team Members
- Alex Korte - [korte@clemson.edu]()
- Alex Duncan - [afdunca@clemson.edu]()
- Ethan Anderson - [ema8@clemson.edu]()

## Purpose

This project aims to leverage several AI tools to generate novel comic strips
related to a short prompt from the user. These strips can be several pages long
and are viewable from our web application.

Comic strips have been a stable of superhero media for decades.
They are unique medium that can be used to tell a story in a way that is
both visually appealing and easy to understand.

## Tools Utilized
### APIs / AI Models
- [GPT-4](https://openai.com/product)
  - Generating stories and diffusion prompts
- [CLIPSeg](https://huggingface.co/docs/transformers/en/model_doc/clipseg)
  - Locating characters in images to attach text bubbles 
- [StabilityDiffusionXL](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0)
  - To render images based on text prompts
- [HuggingFace](https://huggingface.co/)
  - For hosting and accessing the AI models
### Frameworks
- [React](https://reactjs.org/)
- [Flask](https://flask.palletsprojects.com/en/3.0.x/)

### IDEs
- [VSCode](https://code.visualstudio.com/)
- [PyCharm](https://www.jetbrains.com/pycharm/)


## Problems and Solutions

### Generating well formatted stories from GPT-4
At first, we had trouble getting GPT-4 to generate stories where the data could be easily
parsed and then sent to other AI modoels.

We solved this by refining a custom prompt designed with lots of examples and
a clear structure, enabling us to get the data we needed consistently.

### Character Consistency
With each frame being rendered separately, the key characters in the story
can often get horribly modified throughout, making it hard for the user
to follow the story.

To remedy this, we used heavy prompt engineering when formulating characters
to ensure that key details such as the character's skin color, gender, and 
clothing were consistent throughout the story. Furthermore, we used GPT-4
to generate the diffusion prompts based on the character's description along 
with the action they were performing, to continue to cement the character's 
appearance in the story.

### Assigning Text Bubbles to Characters

Once we had images with our characters on them, we needed to add
text bubbles to the images but had no obvious way of knowing which
character was which and where exactly they were in the image.

We solved this by using the CLIPSeg model to locate the characters
in the image and then using the location data to attach text bubbles
to the characters.

CLIPSeg can take an image and a prompt and then returns a heatmap showing
how likely it is that the prompt is in each part of the image. We used this
in conjunction with the character's detailed physical description to
find them in the image.