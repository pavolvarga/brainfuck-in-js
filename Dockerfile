
# use latest version
FROM node:alpine

# actualize
RUN apk update

# copy brainfuck-in-js into workdir
WORKDIR brainfuck-in-js
ADD . /brainfuck-in-js

# run shell so that user can run whichever program
CMD ["/bin/sh"]
