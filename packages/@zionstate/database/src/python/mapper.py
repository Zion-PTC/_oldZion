import os, json, sys
from nftutil import NFTDataMapper

if len(sys.argv) < 2:
	print('You must provide the folder path with trailing /')
	quit()

folder = sys.argv[1]

faction_map = {
    'pfp3': 'Andromeda 6634',
    'pfp3r': 'Raadix',
    'pfp3g': 'Cāng Tiān',
    'pfp3d': 'Qi\'r',
    'pfp3o': 'Helia',
    'pfp3a': 'Zul',
    'pfp3m': 'Pheolix',
    'pfp3p': 'Kutkh',
}

def write_metadata(data, fn, folder, image_url):
  data['description'] = 'Elsewhere: Underlords - High tech Freedom Fighters for the Metaverse'
  data['attr']['planet'] = data['input']
  nftdm = NFTDataMapper(
    'Underlord #' + str(int(fn)), 
    image_url,
    data,
    url='https://elsewhere.io/underlords/',
    value_map=faction_map,
    exclude=['action', 'photography', 'media'],
  )
  nftdm.opensea(out_path=folder + fn + '_opensea.json')


## go through all files in the folder and convert them to proper format
d = os.listdir(folder)
for i, f in enumerate(d):
	fn, ext = f.split('.')
	if ext == 'jpeg':
		print(fn)
		with open(folder + fn + '.json', 'r') as fp:
			data = json.load(fp)
		write_metadata(data, fn, folder, '')