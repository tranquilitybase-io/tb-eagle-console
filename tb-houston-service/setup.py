from setuptools import find_packages, setup

setup(
    name='tb-houston-service',
    version='0.1.0',
    long_description=__doc__,
    author='karwoo',
    author_email='karwoo.tang@gft.com',
    url='http://www.gft.com',
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'flask',
    ],
)
