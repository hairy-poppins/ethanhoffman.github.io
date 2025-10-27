from flask import Flask, request, jsonify
import networkx as nx
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allows your Jekyll site to call this API

@app.route('/api/euler', methods=['POST'])
def euler_path():
    data = request.get_json()
    edges = data.get('edges', [])
    
    G = nx.Graph()
    G.add_edges_from(edges)
    
    # Check if Eulerian path exists
    if not nx.is_eulerian(G) and not nx.has_eulerian_path(G):
        return jsonify({"error": "No Euler path exists for this graph"}), 400

    # Find Euler path
    path = []
    try:
        euler_path_iter = nx.eulerian_path(G)
        for u, v in euler_path_iter:
            path.append([u, v])
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
    return jsonify({"path": path})

if __name__ == '__main__':
    app.run(debug=True)