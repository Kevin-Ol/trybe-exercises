import socketserver


class MyTCPHandler(socketserver.StreamRequestHandler):
    def handle(self):
        # self.rfile is a file-like object created by the handler;
        # we can now use e.g. readline() instead of raw recv() calls
        self.wfile.write(b"Ola cliente \n")

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("ascii").strip())

        # self.data = self.rfile.readline().strip()
        # print(self.data.decode("ascii").strip())
        # self.wfile.write(self.data)

        # Likewise, self.wfile is a file-like object used to write back
        # to the client


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    # Create the server, binding to localhost on port 9999
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        server.serve_forever()
