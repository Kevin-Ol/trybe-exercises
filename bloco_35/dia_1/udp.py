import socketserver


class MyUDPHandler(socketserver.DatagramRequestHandler):
    def handle(self):
        # self.rfile is a file-like object created by the handler;
        # we can now use e.g. readline() instead of raw recv() calls

        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())

        # Likewise, self.wfile is a file-like object used to write back
        # to the client


if __name__ == "__main__":
    HOST, PORT = "localhost", 8085

    # Create the server, binding to localhost on port 9999
    with socketserver.UDPServer((HOST, PORT), MyUDPHandler) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        server.serve_forever()
